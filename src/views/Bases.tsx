import { Card, CardHeader, CardContent } from "@mui/material";
import { Base } from "../components/Base";
import { useAppSelector } from "../hooks/reduxHooks";

export function Bases() {
  const bases = useAppSelector((state) => state.bases.bases);
  return (
    <Card>
      <CardHeader title="Base Runners" sx={{ textAlign: "center" }} />
      <CardContent>
        {bases.map((base, key) => (
          <Base key={key} base={base} />
        ))}
      </CardContent>
    </Card>
  );
}
