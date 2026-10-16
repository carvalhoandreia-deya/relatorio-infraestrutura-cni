import { useSyncExternalStore } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const tooltipStyle = {
  background: "var(--color-card)",
  border: "1px solid var(--color-line)",
  borderRadius: "0.5rem",
  fontSize: "0.875rem",
  color: "var(--color-ink)",
};

function useTick() {
  return (value: unknown) =>
    typeof value === "number" ? value.toLocaleString("pt-BR") : String(value ?? "");
}

function useNarrow() {
  return useSyncExternalStore(
    (notify) => {
      const query = window.matchMedia("(max-width: 639px)");
      query.addEventListener("change", notify);
      return () => query.removeEventListener("change", notify);
    },
    () => window.matchMedia("(max-width: 639px)").matches,
    () => false,
  );
}

export function GroupedBars({
  data,
  xKey,
  bars,
  height = "h-72",
}: {
  data: Record<string, string | number>[];
  xKey: string;
  bars: { key: string; name: string; fill: string }[];
  height?: string;
}) {
  const formatTick = useTick();
  const narrow = useNarrow();
  const crowded = narrow && data.length > 3;
  return (
    <div className={`${narrow ? "h-80" : height} w-full`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 4, left: 0, bottom: crowded ? 28 : 0 }}>
          <CartesianGrid stroke="var(--color-line)" vertical={false} />
          <XAxis
            dataKey={xKey}
            axisLine={false}
            tickLine={false}
            interval={0}
            height={crowded ? 78 : 30}
            tick={(props: { x: number; y: number; payload?: { value?: string } }) => (
              <text
                x={props.x}
                y={props.y}
                dy={crowded ? 2 : 12}
                transform={crowded ? `rotate(-70 ${props.x} ${props.y})` : undefined}
                textAnchor={crowded ? "end" : "middle"}
                fill="var(--color-muted)"
                fontSize={narrow ? 10 : 12}
              >
                {props.payload?.value}
              </text>
            )}
          />
          <YAxis
            tick={{ fill: "var(--color-muted)", fontSize: narrow ? 10 : 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatTick}
            width={narrow ? 40 : 56}
          />
          <Tooltip
            formatter={(value) => formatTick(value)}
            contentStyle={tooltipStyle}
            cursor={{ fill: "var(--color-accent-soft)" }}
          />
          <Legend wrapperStyle={{ fontSize: "0.8125rem" }} />
          {bars.map((bar) => (
            <Bar key={bar.key} dataKey={bar.key} name={bar.name} fill={bar.fill} radius={[3, 3, 0, 0]} maxBarSize={36} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function HorizontalBars({
  data,
  yKey,
  bars,
  height = "h-96",
}: {
  data: Record<string, string | number>[];
  yKey: string;
  bars: { key: string; name: string; fill: string }[];
  height?: string;
}) {
  const formatTick = useTick();
  const narrow = useNarrow();
  return (
    <div className={`${height} w-full min-h-64`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-line)" horizontal={false} />
          <XAxis type="number" tick={{ fill: "var(--color-muted)", fontSize: narrow ? 10 : 12 }} axisLine={false} tickLine={false} tickFormatter={formatTick} />
          <YAxis
            type="category"
            dataKey={yKey}
            width={narrow ? 72 : 112}
            tick={{ fill: "var(--color-ink)", fontSize: narrow ? 10 : 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip formatter={(value) => formatTick(value)} contentStyle={tooltipStyle} cursor={{ fill: "var(--color-accent-soft)" }} />
          <Legend wrapperStyle={{ fontSize: "0.8125rem" }} />
          {bars.map((bar) => (
            <Bar key={bar.key} dataKey={bar.key} name={bar.name} fill={bar.fill} radius={[0, 3, 3, 0]} maxBarSize={16} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function StackedBars({
  data,
  xKey,
  bars,
  height = "h-80",
}: {
  data: Record<string, string | number>[];
  xKey: string;
  bars: { key: string; name: string; fill: string }[];
  height?: string;
}) {
  const formatTick = useTick();
  return (
    <div className={`${height} w-full`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-line)" vertical={false} />
          <XAxis dataKey={xKey} tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={formatTick} width={40} />
          <Tooltip formatter={(value) => formatTick(value)} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: "0.8125rem" }} />
          {bars.map((bar) => (
            <Bar key={bar.key} dataKey={bar.key} name={bar.name} stackId="a" fill={bar.fill} maxBarSize={48} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Donut({
  data,
}: {
  data: { name: string; value: number; fill: string }[];
}) {
  const formatTick = useTick();
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={52} outerRadius={80} paddingAngle={2} stroke="var(--color-card)">
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatTick(value)} contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: "0.8125rem" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RankList({
  rows,
  max,
  threshold,
  digits = 2,
}: {
  rows: { name: string; value: number }[];
  max?: number;
  threshold?: number;
  digits?: number;
}) {
  const ceiling = max ?? Math.max(...rows.map((row) => row.value), 1);
  const format = (value: number) =>
    value.toLocaleString("pt-BR", { minimumFractionDigits: digits, maximumFractionDigits: digits });
  return (
    <ul className="space-y-1.5">
      {rows.map((row) => {
        const over = threshold !== undefined && row.value > threshold;
        return (
          <li key={row.name} className="grid grid-cols-[minmax(0,1.3fr)_minmax(3rem,1fr)_2.75rem] items-center gap-2 sm:grid-cols-[12rem_minmax(0,1fr)_3.5rem] sm:gap-3">
            <span className="text-xs leading-tight text-ink sm:truncate sm:text-sm" title={row.name}>
              {row.name}
            </span>
            <span className="h-2 overflow-hidden rounded-full bg-green-soft">
              <span
                className={over ? "block h-2 rounded-full bg-copper" : "block h-2 rounded-full bg-green"}
                style={{ width: `${Math.min(100, (row.value / ceiling) * 100)}%` }}
              />
            </span>
            <span className={over ? "text-right text-sm font-semibold text-copper tabular" : "text-right text-sm font-semibold text-ink tabular"}>
              {format(row.value)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
