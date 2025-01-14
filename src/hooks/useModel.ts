import { colorTypes } from "@/lib/util/model/modelColorTypes";
import { theme } from "@/styles/theme";
import React, { useState } from "react";

const useModel = () => {
  const [currentAction, setCurrentAction] = useState(4);
  const [canvasColor, setCanvasColor] = useState({
    vision: theme.palette.white,
    watch: theme.palette.white,
  });

  const changeColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id: type } = e.currentTarget;

    const currentColor: Record<string, string> = {
      vision: canvasColor.vision,
      watch: canvasColor.watch,
    };

    setCanvasColor((prev) => ({
      ...prev,
      [type]: colorTypes[currentColor[type]],
    }));
  };

  const changeAction = (e: React.MouseEvent<HTMLButtonElement>) =>
    setCurrentAction(+e.currentTarget.id);

  return {
    canvasColor,
    currentAction,
    changeColor,
    changeAction,
  };
};

export default useModel;
