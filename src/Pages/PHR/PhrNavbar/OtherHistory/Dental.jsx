// import Update from "../../../../CommonComponents/Update/Update";

// const Dental = () => {
//   return (
//     <>
//       <div className="px-2 py-3">
//       <div className="flex justify-between">
//         <h2 className="font-semibold text-lg">Dental</h2>
//         <Update/>
//       </div>
      
//         <p className="border border-gray-200 px-2 my-3"></p>
        
//         <div className="flex gap-20">
//         <div className="py-4 flex flex-col gap-2">
//           <div className="flex gap-16 text-base">
//             <p>Implants:</p>
//             <p className="font-semibold">Yes</p>
//           </div>

//           <div className="flex gap-12 text-base">
//             <p>Root Canal:</p>
//             <p className="font-semibold">Yes</p>
//           </div>

//           <div className="flex gap-8 text-base">
//             <p>Partial Dental:</p>
//             <p className="font-semibold">Yes</p>
//           </div>

//           <div className="flex gap-16 text-base">
//             <p>Bridges:</p>
//             <p className="pl-2 font-semibold">Yes</p>
//           </div>

//           <div className="flex gap-20 text-base">
//             <p>Braces:</p>
//             <p className="font-semibold">Yes</p>
//           </div>
//           </div>


//           <div className="py-4 flex flex-col gap-2">
//           <div className="flex gap-16 text-base">
//             <p>Capping:</p>
//             <p className="font-semibold">Yes</p>
//           </div>

//           <div className="flex gap-12 text-base">
//             <p>Full Dentures:</p>
//             <p className="font-semibold">Yes</p>
//           </div>

//           <div className="flex gap-8 text-base">
//             <p>Crowns:</p>
//             <p className="font-semibold">Yes</p>
//           </div>

//           <div className="flex gap-16 text-base">
//             <p>Gum Disease:</p>
//             <p className="pl-2 font-semibold">Yes</p>
//           </div>

//           <div className="flex gap-20 text-base">
//             <p>Extraction of Tooth:</p>
//             <p className="font-semibold">Yes</p>
//           </div>
//           </div>
//           </div>
//       </div>
//     </>
//   )
// }

// export default Dental;

import Update from "../../../../CommonComponents/Update/Update";

const Dental = () => {
  return (
    <>
      <div className="px-2 py-3">
        <div className="flex justify-between">
          <h2 className="font-semibold text-lg">Dental</h2>
          <Update />
        </div>

        <p className="border border-gray-200 px-2 my-3"></p>

        <div className="flex gap-20">
          <div className="py-4 flex flex-col gap-2">
            {[
              "Implants",
              "Root Canal",
              "Partial Dental",
              "Bridges",
              "Braces",
            ].map((item, index) => (
              <div key={index} className="flex justify-between w-72 text-base">
                <p className="min-w-[140px]">{item}:</p>
                <p className="font-semibold">Yes</p>
              </div>
            ))}
          </div>

          <div className="py-4 flex flex-col gap-2">
            {[
              "Capping",
              "Full Dentures",
              "Crowns",
              "Gum Disease",
              "Extraction of Tooth",
            ].map((item, index) => (
              <div key={index} className="flex justify-between w-72 text-base">
                <p className="min-w-[140px]">{item}:</p>
                <p className="font-semibold">Yes</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dental;
