import * as React from "react";
import {
  compose,
  setDisplayName,
  withStateHandlers,
  StateHandler
} from "recompose";
import { SideBar, SideBarProps } from "../../components/SideBar";

interface StateProps {
  titleList: Array<string>;
  updateTitleList: Array<string>;
}

type Outter = {
  initialTitleList: Array<string>;
  initialUpdateTitleList: Array<string>;
};

type StateHandlerProps = {
  filterTitle: () => StateHandler<StateProps>;
};

type EnhancedSideBarProps = StateProps & SideBarProps & StateHandlerProps;

const filterTitle = (state: StateProps) => (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const updateTitleList = state.titleList.filter((item: string) => {
    return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
  });
  return { updateTitleList };
};

const createProps = (props: Outter): StateProps => ({
  titleList: props.initialTitleList,
  updateTitleList: props.initialUpdateTitleList
});

const enhance = compose<EnhancedSideBarProps, any>(
  setDisplayName("EnhancedSideBar"),
  //@ts-ignore
  withStateHandlers<StateProps, StateHandlerProps, SideBarProps>(createProps, {
    filterTitle: filterTitle
  })
);

export default enhance(SideBar);
