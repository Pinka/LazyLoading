"use client";

import { useEffect, useRef } from "react";

// Extend Window interface to recognize Chart
declare global {
  interface Window {
    Chart: any;
  }
}

/**
 * A chart component that demonstrates lazy loading with React Suspense.
 * Chart.js is loaded at runtime only when this component is rendered.
 */
export default function ChartComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<any>(null);

  // Load and initialize the chart when the component mounts
  useEffect(() => {
    // Dynamic import of Chart.js script
    const loadChartJS = async () => {
      // Check if Chart.js is already loaded
      if (typeof window !== "undefined" && !window.Chart) {
        // Dynamically load Chart.js from CDN
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/chart.js";
        script.async = true;

        // Wait for the script to load
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // Once Chart.js is loaded, create the chart
      if (canvasRef.current && typeof window.Chart === "function") {
        // Create chart instance
        chartInstanceRef.current = new window.Chart(canvasRef.current, {
          type: "bar",
          data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Monthly Sales",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    };

    loadChartJS();

    // Clean up on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Monthly Sales Chart</h3>
      <div className="h-[250px] w-full">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
