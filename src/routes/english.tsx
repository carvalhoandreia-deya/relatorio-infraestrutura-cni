import { createFileRoute } from "@tanstack/react-router";
import { EnglishDocument } from "@/components/report/english-print";

export const Route = createFileRoute("/english")({
  component: EnglishDocument,
});
