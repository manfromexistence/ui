import { useEffect, useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import Customize from "../../components/common/Customize";
import PreviewSlider from "../../components/common/PreviewSlider";
import logo from '../../assets/logos/react-bits-solid-black.svg';
import CodeExample from "../../components/code/CodeExample";
import useForceRerender from "../../hooks/useForceRerender";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";

import MetallicPaint, { parseLogoImage } from "../../content/Animations/MetallicPaint/MetallicPaint";
import { metallicPaint } from "../../constants/code/Animations/metallicPaintCode";

const LiquidPaperDemo = () => {
  const [imageData, setImageData] = useState(null);
  const [edge, setEdge] = useState(0);
  const [patternScale, setPatternScale] = useState(2);
  const [refraction, setRefraction] = useState(0.015);
  const [patternBlur, setPatternBlur] = useState(0.005);
  const [liquid, setLiquid] = useState(0.07);
  const [speed, setSpeed] = useState(0.3);

  const [key, forceRerender] = useForceRerender();

  useEffect(() => {
    async function loadDefaultImage() {
      try {
        const response = await fetch(logo);
        const blob = await response.blob();
        const file = new File([blob], "default.png", { type: blob.type });
        const { imageData } = await parseLogoImage(file);
        setImageData(imageData);
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }
    loadDefaultImage();
  }, []);

  const propData = [
    {
      name: "imageData",
      type: "ImageData",
      default: "none (required)",
      description:
        "The processed image data generated from parseLogoImage. This image data is used by the shader to create the liquid paper effect."
    },
    {
      name: "params",
      type: "ShaderParams",
      default: "",
      description:
        "An object to configure the shader effect. Properties include: patternScale, refraction, edge, patternBlur, liquid, speed"
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <MetallicPaint key={key} imageData={imageData} params={{ edge, patternBlur, patternScale, refraction, speed, liquid }} />
        </Box>

        <Customize>
          <PreviewSlider
            title="Edge"
            min={0}
            max={2}
            step={0.1}
            value={edge}
            onChange={(val) => {
              setEdge(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Pattern Scale"
            min={1}
            max={5}
            step={0.1}
            value={patternScale}
            onChange={(val) => {
              setPatternScale(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Pattern Blur"
            min={0}
            max={0.1}
            step={0.001}
            value={patternBlur}
            onChange={(val) => {
              setPatternBlur(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Refraction"
            min={0}
            max={0.1}
            step={0.01}
            value={refraction}
            onChange={(val) => {
              setRefraction(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Liquid"
            min={0}
            max={1}
            step={0.01}
            value={liquid}
            onChange={(val) => {
              setLiquid(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Speed"
            min={0}
            max={1}
            step={0.01}
            value={speed}
            onChange={(val) => {
              setSpeed(val);
              forceRerender();
            }}
          />
        </Customize>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={metallicPaint} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...metallicPaint} />
      </CliTab>
    </TabbedLayout>
  );
};

export default LiquidPaperDemo;