// import React from "react";
// import { useDispatch } from "react-redux";
// import { setFromDate, setToDate } from "../../redux/filterSlice";

// function FilterProps({ handleClose }) {
//   const dispatch = useDispatch();

//   const handleFromDateChange = (e) => {
//     dispatch(setFromDate(e.target.value));
//   };

//   const handleToDateChange = (e) => {
//     dispatch(setToDate(e.target.value));
//   };

//   return (
//     <div className="filter-props">
//       <label htmlFor="fromDate">From:</label>
//       <input
//         type="text"
//         id="fromDate"
//         name="fromDate"
//         onChange={handleFromDateChange}
//       />
//       <label htmlFor="toDate">To:</label>
//       <input
//         type="text"
//         id="toDate"
//         name="toDate"
//         onChange={handleToDateChange}
//       />
//       <button onClick={handleClose}>Close</button>
//     </div>
//   );
// }

// export default FilterProps;

