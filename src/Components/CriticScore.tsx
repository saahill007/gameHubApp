import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color: string = score >= 90 ? "green" : score > 70 ? "orange" : "";
  return (
    <Badge colorScheme={color} borderRadius={2} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
