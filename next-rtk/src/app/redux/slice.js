const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  userApiData: [],
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

export const fetchApiUser = createAsyncThunk("fetchApiUser", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});
const Slice = createSlice({
  name: "addUserSlice",
  initialState,

  reducers: {
    addUser: (state, action) => {
      // console.log("slice", action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      //   console.log(current(state.users));
      const userData = JSON.stringify(current(state.users));
      localStorage.setItem("users", userData);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
      // console.log(state.users);
      const removeuserData = JSON.stringify(state.users);
      localStorage.setItem("users", removeuserData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUser.fulfilled, (state, action) => {
      // console.log("reducer",action);
      (state.isloading = false), (state.userApiData = action.payload);
    });
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
