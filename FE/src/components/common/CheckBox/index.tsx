import { useState } from "react";

import * as S from "./style";

const CheckBox = ({ ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  return <S.Input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} {...rest} />;
};

export default CheckBox;
