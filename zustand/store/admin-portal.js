import create from "zustand"

export const useAdmin = create(set => ({
  /* State */
  admin: {
    userName: "",
    password: ""
  },

  /* Computed */

  /* Functions */
  handleChange: (e, value) => {
    e.preventDefault()
    set(state => ({
      ...state,
      admin: {
        ...state.admin,
        [value]: e.target.value
      }
    }))
  },
  handleSubmit: async (e, admin) => {
    e.preventDefault()
    console.log("Employer Details ==>> ", admin)
    // await loginUser(user, setErrorMsg, setFormLoading,);
    // set((state) => ({
    //     ...state,
    //     submitDisabled: true,
    //     user: {
    //         ...state.user,
    //         email: '',
    //         password: '',
    //     },
    // }))
  }
}))
