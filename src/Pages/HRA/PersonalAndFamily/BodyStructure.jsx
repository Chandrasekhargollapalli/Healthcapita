import { HraAssets } from "../../../assets/Hra/assets";
import { useEffect, useState,useContext } from "react";
import Button from "../../../CommonComponents/Button";
import axios from "axios";
import { HraApiEndPoints } from "../../../utils/HraApis";
import { DateContext } from "../../../utils/DateProvider";
import { useSelector } from "react-redux";

const BodyStructure = ({ onNext,showProgressSaved}) => {
  const {selectedDate}=  useContext(DateContext)
  const [errors, setErrors] = useState({});
  const UserId = useSelector((state) => state?.user?.user?.userId)

  console.log(selectedDate)
 
  const [formData, setFormData] = useState({
    waistValue: "",
    hipValue: "",
    heightValue: "",
    weightValue: "",
    chestValue: "",
    chestMeasurement: "Cms", 
    waistMeasurement: "Cms", 
    hipMeasurement: "Cms", 
    heightMeasurement: "Cms", 
    weightMeasurement: "Kgs", 
    AutoId: 0,
    bloodGroup:'',
    RecStatus: "P",
    DateOfEntry: selectedDate,
    UserId,  
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://service.healthcapita.com/api/Hra/GetBodyStructure?UserId=${UserId}&AssesmentDate=${selectedDate}`
        );
       
        if(response?.data?.isData){
          setFormData(response?.data?.data);
        }else{
          setFormData({
            waistValue: "",
            hipValue: "",
            heightValue: "",
            weightValue: "",
            chestValue: "",
            chestMeasurement: "Cms", 
            waistMeasurement: "Cms", 
            hipMeasurement: "Cms", 
            heightMeasurement: "Cms", 
            weightMeasurement: "Kgs", 
            AutoId: 0,
            bloodGroup:'',
            RecStatus: "P",
            DateOfEntry: selectedDate,
            UserId,  
          })
        }
       
      } catch (error) {
        console.log(error);
      
      }
    };
    fetchData();
  }, [selectedDate]);
console.log(formData)
  const validateInputs = () => {
    const newErrors = {};

    if (!formData?.chestValue) newErrors.chestValue = "Chest measurement is required";
    if (!formData?.waistValue) newErrors.waistValue = "Waist measurement is required";
    if (!formData?.hipValue) newErrors.hipValue = "Hip measurement is required";
    if(!formData?.bloodGroup) newErrors.hipValue = "Hip measurement is required"
    if (!formData?.heightValue) {
      newErrors.heightValue = "Height is required";
    } else if (formData.heightMeasurement === "Cms" && (formData.heightValue < 50 || formData.heightValue > 300)) {
      newErrors.heightValue = "Height must be between 50 and 300 cm";
    } else if (formData.heightMeasurement === "ft" && (formData.heightValue < 2 || formData.heightValue > 7)) {
      newErrors.heightValue = "Height must be between 2 and 7 ft";
    }
    if (!formData?.weightValue) {
      newErrors.weightValue = "Weight is required";
    } else if (formData.weightMeasurement === "Kgs" && (formData.weightValue < 10 || formData.weightValue > 300)) {
      newErrors.weightValue = "Weight must be between 10 and 300 kg";
    } else if (formData.weightMeasurement === "Pounds" && (formData.weightValue < 20 || formData.weightValue > 660)) {
      newErrors.weightValue = "Weight must be between 20 and 660 pounds";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const onChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value,
      });
      if (errors[name]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
      return;
    }

    if (type === "select-one") {
      setFormData({
        ...formData,
        [name]: value,  // Update form data with selected value
      });
      if (errors[name]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
      return;
    }

    if (/^\d{0,3}(\.\d{0,2})?$/.test(value)) {
      setFormData({
        ...formData,
        [name]: value,
      });
  
      if (errors[name]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "",
        }));
      }
    }
};

  
  const handleNextClick = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      // if(formData.bloodGroup===null)bloodGroup=''
      try {
        const response = await axios.post(
          HraApiEndPoints.SaveBodyStracture,
          formData
        );
        console.log('bodyStracture response',response?.data?.status)
      if(response?.data?.status){
        showProgressSaved(true)
        onNext();
        setFormData({});
      }else{
        showProgressSaved(false)
      }
       
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <form autoComplete="off">
        <div className="grid grid-cols-12   ">
          <div className="col-span-4 flex flex-col items-end mt-10  ">
            <div className="flex flex-col gap-10 ">
              <div className="border rounded-lg p-4  shadow-lg w-64 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">Chest Circumference</h2>
                </div>
                <div className="flex items-center space-x-4 mb-3">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="chestMeasurement"
                      value="Cms"
                      checked={formData?.chestMeasurement === "Cms"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Cms</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="chestMeasurement"
                      value="in"
                      checked={formData?.chestMeasurement === "in"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Inches</span>
                  </label>
                </div>
                <input
                  type="number"
                  placeholder="Ex: 32"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.chestValue ? "border-red-500" : ""
                  }`}
                  name="chestValue"
                  value={formData?.chestValue}
                  onChange={onChange}
                />
                {errors.chestValue && (
                  <span className="text-red-500 text-sm">{errors.chestValue}</span>
                )}
              </div>

              <div className="border rounded-lg p-4 shadow-lg w-64 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">Waist Circumference</h2>
                </div>
                <div className="flex items-center space-x-4 mb-3">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="waistMeasurement"
                      value="Cms"
                      checked={formData?.waistMeasurement === "Cms"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Cms</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="waistMeasurement"
                      value="in"
                      checked={formData?.waistMeasurement === "in"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Inches</span>
                  </label>
                </div>
                <input
                  type="number"
                  placeholder="Ex: 30"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.waistValue ? "border-red-500" : ""
                  }`}
                  name="waistValue"
                  value={formData?.waistValue}
                  onChange={onChange}
                />
                {errors.waistValue && (
                  <span className="text-red-500 text-sm">{errors.waistValue}</span>
                )}
              </div>
              {/* blood-group-start */}
              <div className="border rounded-lg p-4 shadow-lg w-64 bg-white">
  <div className="flex items-center justify-between mb-2">
    <h2 className="text-lg font-semibold">Blood Group</h2>
  </div>

  <select
    className={`w-full px-3 py-2 border rounded-md ${errors.bloodGroup ? "border-red-500" : ""}`}
    name="bloodGroup"
    value={formData.bloodGroup || ''}

    onChange={onChange}
  >
    <option value="">Select Blood Group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </select>

  {errors.bloodGroup && (
    <span className="text-red-500 text-sm">{errors.bloodGroup}</span>
  )}
</div>

              {/* bloodGroup-end */}
            </div>
          </div>

          <div className="col-span-4 ">
            <img
              src={HraAssets.BodywithFlow}
              alt="Body Structure"
              
            />
          </div>

          <div className="col-span-4 flex flex-col mt-16">
            <div className="flex flex-col gap-10">
              <div className="border rounded-lg p-4 shadow-lg w-64 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">Hip Circumference</h2>
                </div>
                <div className="flex items-center space-x-4 mb-3">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="hipMeasurement"
                      value="Cms"
                      checked={formData?.hipMeasurement === "Cms"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Cms</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="hipMeasurement"
                      value="in"
                      checked={formData?.hipMeasurement === "in"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Inches</span>
                  </label>
                </div>
                <input
                  type="number"
                  placeholder="Ex: 36"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.hipValue ? "border-red-500" : ""
                  }`}
                  name="hipValue"
                  value={formData?.hipValue}
                  onChange={onChange}
                />
                {errors.hipValue && (
                  <span className="text-red-500 text-sm">{errors.hipValue}</span>
                )}
              </div>

              <div className="border rounded-lg p-4 shadow-lg w-64 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">Height</h2>
                </div>
                <div className="flex items-center space-x-4 mb-3">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="heightMeasurement"
                      value="Cms"
                      checked={formData?.heightMeasurement === "Cms"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Cms</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="heightMeasurement"
                      value="ft"
                      checked={formData?.heightMeasurement === "ft"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Feet/Inches</span>
                  </label>
                </div>
                <input
                  type="number"
                  placeholder="Ex: 70"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.heightValue ? "border-red-500" : ""
                  }`}
                  name="heightValue"
                  value={formData?.heightValue}
                  onChange={onChange}
                />
                {errors.heightValue && (
                  <span className="text-red-500 text-sm">{errors.heightValue}</span>
                )}
              </div>

              <div className="border rounded-lg p-4 shadow-lg w-64 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold">Weight</h2>
                </div>
                <div className="flex items-center space-x-4 mb-3">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="weightMeasurement"
                      value="Kgs"
                      checked={formData?.weightMeasurement === "Kgs"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Kgs</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="weightMeasurement"
                      value="Pounds"
                      checked={formData?.weightMeasurement === "Pounds"}
                      onChange={onChange}
                      className="form-radio text-green-500"
                    />
                    <span>Pounds</span>
                  </label>
                </div>
                <input
                  type="number"
                  placeholder="Ex: 75"
                  className={`w-full px-3 py-2 border rounded-md ${
                    errors.weightValue ? "border-red-500" : ""
                  }`}
                  name="weightValue"
                  value={formData?.weightValue}
                  onChange={onChange}
                />
                {errors.weightValue && (
                  <span className="text-red-500 text-sm">{errors.weightValue}</span>
                )}
              </div>
            </div>
          </div>
        </div>
       
      </form>
      <div className="col-span-1 mt-20 text-center"></div>
        <div className="col-span-12 flex justify-end">
       <Button type='primary' onClick={handleNextClick} >Next: Blood Pressure</Button>
        </div>
    </div>
  );
};

export default BodyStructure;
