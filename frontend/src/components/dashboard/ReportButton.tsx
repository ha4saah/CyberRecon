import api from "../../services/api";
import type { ScanResponse } from "../../types/scan";


type Props = {
  scan?: ScanResponse | null;
};


export default function ReportButton({
  scan
}: Props) {


  async function generateReport() {


    if (!scan) {

      alert(
        "Please scan a target first."
      );

      return;

    }


    try {


      const response = await api.post(
        "/api/report",
        scan,
        {
          responseType: "blob"
        }
      );



      const url = window.URL.createObjectURL(
        new Blob(
          [response.data]
        )
      );



      const link = document.createElement(
        "a"
      );


      link.href = url;


      link.download =
        "CyberRecon_Security_Report.pdf";


      document.body.appendChild(link);


      link.click();


      link.remove();



      window.URL.revokeObjectURL(url);



    } catch(error) {


      console.error(error);


      alert(
        "Report generation failed."
      );

    }

  }



  return (

    <button

      onClick={generateReport}

      disabled={!scan}

      className="
      rounded-xl
      bg-purple-600
      px-5
      py-3
      font-medium
      text-white
      transition
      hover:bg-purple-700
      disabled:opacity-50
      "

    >

      Generate Report

    </button>

  );

}