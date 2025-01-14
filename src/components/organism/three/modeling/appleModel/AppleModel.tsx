import { AppleColorWrapper, AppleLayout, ColLayout } from "./AppleModelStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import ModelCore from "../../modelCore/ModelCore";
import { VISION, WATCH } from "@/lib/util/constanse";
import { appleProps } from "@/lib/util/model/orbitOption";
import useModel from "@/hooks/useModel";
import { Float } from "@react-three/drei";

const AppleModel = () => {
  const { canvasColor, changeColor } = useModel();

  return (
    <ColLayout>
      <AppleLayout>
        <CanvasCore
          orbitProps={appleProps}
          bgColor={canvasColor.vision}
          hasRadius>
          <Float floatIntensity={3} speed={2}>
            <ModelCore source={VISION} sacle={18} />
          </Float>
        </CanvasCore>
        <AppleColorWrapper
          id={VISION}
          $canvasColor={canvasColor.vision}
          onClick={changeColor}>
          Color
        </AppleColorWrapper>
      </AppleLayout>
      <AppleLayout>
        <CanvasCore
          orbitProps={appleProps}
          bgColor={canvasColor.watch}
          hasRadius>
          <Float floatIntensity={3} speed={2}>
            <ModelCore source={WATCH} sacle={40} />
          </Float>
        </CanvasCore>
        <AppleColorWrapper
          id={WATCH}
          $canvasColor={canvasColor.watch}
          onClick={changeColor}>
          Color
        </AppleColorWrapper>
      </AppleLayout>
    </ColLayout>
  );
};

export default AppleModel;
