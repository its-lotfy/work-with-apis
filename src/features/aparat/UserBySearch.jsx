import { getVideoInfo, getChanelCat } from "@/features/aparat/aparatApi";
import { useState } from "react";
import _ from "lodash";
const UserBySearch = () => {
  const [value, setValue] = useState();
  const handleChange = async (value) => {
    // const response = await getChanelCat(encodeURI(`${value}`));
    const response = await getVideoInfo(value);
    console.log(response);
  };
  const optimizedFn = _.debounce(handleChange, 2000);

  return (
    <div>
      <input value={value} onChange={(e) => optimizedFn(e.target.value)} />
    </div>
  );
};
export default UserBySearch;
