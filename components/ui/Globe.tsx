"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Color, Scene, Fog, PerspectiveCamera } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings = [0];

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    {
      size: number;
      order: number;
      color: (t: number) => string;
      lat: number;
      lng: number;
    }[] | null
  >(null);

  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  const _buildMaterial = useCallback(() => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  }, [globeConfig.globeColor, globeConfig.emissive, globeConfig.emissiveIntensity, globeConfig.shininess]);

  const _buildData = useCallback(() => {
    const arcs = data;
    const points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // Remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );

    setGlobeData(filteredPoints);
  }, [data, defaultProps.pointSize]);

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [_buildData, _buildMaterial]);

  const startAnimation = useCallback(() => {
    if (!globeRef.current || !globeData) return;
  
    globeRef.current
      .arcsData(data)
      .arcStartLat((d: Position) => d.startLat)
      .arcStartLng((d: Position) => d.startLng)
      .arcEndLat((d: Position) => d.endLat)
      .arcEndLng((d: Position) => d.endLng)
      .arcColor((d: Position) => d.color)
      .arcAltitude((d: Position) => d.arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((d: Position) => d.order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);
  
    globeRef.current
      .pointsData(data)
      .pointColor((d: Position) => d.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);
  
    globeRef.current
      .ringsData([])
      .ringColor((d: Position) => d.color)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
  }, [data, defaultProps.arcLength, defaultProps.arcTime, defaultProps.maxRings, defaultProps.rings, globeData]);
  
  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => defaultProps.polygonColor);
      startAnimation();
    }
  }, [
    globeData,
    startAnimation,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      numbersOfRings = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));

      globeRef.current.ringsData(
        globeData.filter((d, i) => numbersOfRings.includes(i))
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeData, data.length]);

  return <threeGlobe ref={globeRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size.width, size.height]);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.background = new Color(0x000000);
  scene.fog = new Fog(0x535ef3, 400, 2000);
  const camera = new PerspectiveCamera(70, aspect, 0.1, 2000);
  camera.position.z = cameraZ;

  return (
    <Canvas camera={camera} scene={scene}>
      <OrbitControls autoRotate={globeConfig.autoRotate} autoRotateSpeed={globeConfig.autoRotateSpeed} />
      <WebGLRendererConfig />
      <ambientLight intensity={0.6} color={globeConfig.ambientLight} />
      <directionalLight intensity={0.5} color={globeConfig.directionalTopLight} />
      <directionalLight intensity={0.5} color={globeConfig.directionalLeftLight} />
      <pointLight intensity={0.8} color={globeConfig.pointLight} />
      <Globe {...props} />
    </Canvas>
  );
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b
  );
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function genRandomNumbers(min: number, max: number, count: number): number[] {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return randomNumbers;
}
