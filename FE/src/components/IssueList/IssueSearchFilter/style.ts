import styled from "styled-components";

import { COLOR } from "@/styles/constTheme";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${COLOR["gray-500"]};
  border-radius: 11rem;
  width: 600rem;
  height: 40rem;
  background-color: transparent;
  overflow: hidden;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 472rem;
  padding-left: 26rem;
  gap: 10rem;
  border-left: 1rem solid ${COLOR["gray-500"]};
  background-color: ${COLOR["gray-400"]};
`;
