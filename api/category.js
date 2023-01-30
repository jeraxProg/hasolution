const express = require("express");
const router = express.Router();
const CategoryModel = require("../models/CategoryModel");


// Get Category list
router.get("/category-list", async (req, res) => {
  try {
    let match = {}
    const categories = await CategoryModel.find();

    let show;

    if (req.query.keyword === "true") {
        show = true;
    } else if(req.query.keyword === "false") {
        show = false;
    } else show;

    if (req.query.keyword) {
        match.$or = [
            {title: new RegExp(req.query.keyword, "i")},
            {isShown: show}
        ]
    }

    const response = await CategoryModel.aggregate([{ $match: match}])

    return res.status(202).json(response);
  } catch (error) {
    return res.status(500).json({
      message: "/category/get",
      error,
    });
  }
});


// Add Category
router.post("/", async (req, res) => {
  try {
    let category;
    const { title } = req.body;
    category = await CategoryModel.findOne({ title: title.toLowerCase() });

    if (category)
      return res.status(401).json({ message: "Category title already used." });
    if (!title)
      return res
        .status(401)
        .json({ message: "Category title cannot be blank." });

    category = new CategoryModel({
      title: title.toLowerCase(),
      isShown: true,
    });

    category.save();

    return res.status(202).json({ message: "Successfully Added!" });
  } catch (error) {
    return res.status(500).json({
      message: "/category/post",
      error,
    });
  }
});


// Delete Category
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findOneAndDelete({ _id: id });

    if (category) {
      return res.status(202).json({ message: "Succesfully Deleted!" });
    } else {
      return res.status(401).json({ message: "No category title found!" });
    }
  } catch (error) {
    return res.status(500).json({
      message: "/category/delete",
      error,
    });
  }
});


// Update a Category
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { title, isShown } = req.body;
    const isCategory = await CategoryModel.findOne({ _id: id });
    const isNewCategory = await CategoryModel.findOne({ title });

    if (!title){
      return res
        .status(401)
        .json({ message: "Category title cannot be blank." });
    }

    if (isCategory) {
      if (!isNewCategory) {
        await CategoryModel.updateOne({ _id: id }, { title, isShown });
        return res.status(202).json({ message: "Succesfully Updated!" });
      } else {
        return res
          .status(401)
          .json({
            message: "Category title is already in use! Please try again!",
          });
      }
    } else {
      return res
        .status(401)
        .json({ message: "No category title found! Please try again!" });
    }
  } catch (error) {
    return res.status(500).json({
      message: "/category/update",
      error,
    });
  }
});

module.exports = router;
