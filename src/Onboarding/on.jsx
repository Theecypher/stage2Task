
// import "./Timer.css";
import { useState } from "react";
// import useStore from "../../../zustand-store/store";


const TimerModal = () => {
  const [value, setValue] = useState({
    Tname: "",
    start: "",
    finish: "",
    schedule: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);


  const handleChange = (e) => {
    setValue((state) => ({
      ...state,

      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.value);
  };
  //   const convertTime = (time, scheduleDate) => {
  //     const date = new Date(scheduleDate);
  //     const combinedDateTime = new Date(date.toDateString() + " " + time);
  //     const isoString = combinedDateTime.toISOString();
  //     console.log(isoString);
  //     return isoString;
  //   };
  //   const updateTime = () => {
  //     const scheduleDate = new Date(value.schedule);
  //     const startTime = convertTime(value.start, scheduleDate);
  //     const endTime = convertTime(value.finish, scheduleDate);
  //     const timerDetails = {
  //       timerName: value.Tname,
  //       start: startTime,
  //       stop: endTime,
  //       calenderSchedule: scheduleDate,
  //     };
  //     return timerDetails;
  //   };

  //     const createReminders = useReminderStore((state) => state.createReminders);
  //     const validateInputs=()=>{
  //         let error={}
  //         if(!value.Tname){
  //             error.name ="Timer name cannot be empty"
  //         }
  //         if (!value.finish) {
  //           error.finish = "Timer Stop time cannot be empty";
  //         }
  //          if (!value.start) {
  //            error.start = "Timer Start time cannot be empty";
  //          }
  //           if (!value.schedule) {
  //             error.schedule = "Timer Schedule date cannot be empty";
  //           }
  //           return error
  //     }
  //     const handleSetTimer = (e) => {
  //         e.preventDefault();
  //         setIsLoading(true)
  //         const validate = validateInputs()
  //         console.log(validate)
  //         if(Object.keys(validate).length ==0){
  //         // createReminders(value);
  //         // setValue(" ");
  //         const timerDetails = updateTime()
  //         console.log(timerDetails)
  //         axios.post(`${baseUrl}/timers`, timerDetails, {headers})
  //         .then((response)=>{
  //             console.log(response)
  //             if ((response?.data?.status == "success")) {
  //                 setIsLoading(false);
  //             toast.success(response?.data?.message)
  //             getTimers()
  //         }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           if (error.response?.data?.err?.includes("duplicate key error")) {
  //             toast.error("Error! Duplicate Timer");
  //           } else {
  //             toast.error(error.response?.data?.err || error?.response?.data?.message);
  //           }
  //           setIsLoading(false);
  //         });
  //     } else {
  //       setErrors(validate);
  //       toast.error("Error! Please check the inputs");
  //       setIsLoading(false);
  //     }
  //   };

  return (
    <div>
      {/* // onclick={handleClose}> */}
      <form
        className="inline-flex px-[30px] py-[20px] m-auto border items-start
            rounded-[16px] bg-white
            orange-gradient gap-[10px]"
      >
        <div className="fle flex-col items-center gap-[10px]">
          <div className="flex justify-between w-[410px] items-center font-montserrat">
            <p className="font-[600] text-[20px] leading-[30px] tracking-[-0.46px] text-[#1e1e1e]">
              Set timer
            </p>
            {/* <img
              src={Close}
              className="flex justify-between items-center text-[#1e1e1e] bg-[#f5f5f5] font-extrabold rounded-md w-[30px]"
              onClick={handleClose}
              alt=""
            /> */}
          </div>

          <div className="flex flex-col w-[410px] gap-2">
            <div className="flex w-full flex-col items-start gap-1">
              <label
                htmlFor="name"
                className="text-[#1e1e1e] font-Monserrat text-[16px] font-[400] leading-[24px] tracking-[-0.368px]"
              >
                Timer name
              </label>
              <input
                type="text"
                value={value.Tname}
                className="border borderstyle outline-none w-full rounded-[16px] py-[14px] pl-[16px]"
                placeholder="Timer name"
                name="Tname"
                onChange={handleChange}
              />
            </div>

            <div className="flex w-full flex-col gap-1">
              <label
                htmlFor="start"
                className="text-[#1e1e1e] font-Monserrat text-[16px] font-[400] leading-[24px] tracking-[-0.368px]"
              >
                Start
              </label>
              <input
                type="time"
                className="flex w-full py-[14px] border borderstyle pl-[16px] items-center rounded-[16px]"
                placeholder="Starting Time"
                value={value.start}
                name="start"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="flex m-auto justify-center items-center text-[#FFFFFF] bg-[#034592] font-[500] text-[13.714px] leading-[20.571px] rounded-2xl py-[5.7px] px-[38.095px] gap-[3.81px]"
            >
              {" "}
              {/* {isLoading ? "Creating..." : "Create"} */}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TimerModal;
