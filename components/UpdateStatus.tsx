"use client";

interface Props {
  orderId: number;
}

export default function UpdateStatus({
  orderId,
}: Props) {

  const updateStatus = async (status: string) => {

    try {

      const response = await fetch("/api/order/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          status,
        }),
      });

      const data = await response.json();

      if (data.success) {

        alert("Status berhasil diupdate");

        window.location.reload();

      } else {

        alert("Gagal update status");
      }

    } catch (error) {

      console.log(error);

      alert("Server error");
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mt-6">

      <button
        onClick={() => updateStatus("PROSES")}
        className="bg-blue-500 hover:bg-blue-400 transition px-5 py-3 rounded-xl font-semibold"
      >
        Proses
      </button>

      <button
        onClick={() => updateStatus("SELESAI")}
        className="bg-green-500 hover:bg-green-400 transition px-5 py-3 rounded-xl font-semibold"
      >
        Selesai
      </button>

      <button
        onClick={() => updateStatus("DIBATALKAN")}
        className="bg-red-500 hover:bg-red-400 transition px-5 py-3 rounded-xl font-semibold"
      >
        Batalkan
      </button>

    </div>
  );
}