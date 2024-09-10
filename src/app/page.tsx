// import Image from "next/image";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import  codeimg  from "../../public/codeimg.png";

// export default function Home() {
//   return (
//     <>
//       <main className="flex flex-col gap-5 w-full h-[100vh] justify-center items-center"> 
//       <h3 className="Text-3xl">Nextjs (Typescript) configuration with <b>Taiwind</b> and <b>MUI</b> Both </h3>
//         <Stack spacing={2} direction="row">
//           <Button className="p-2 bg-red-300 text-white hover:bg-gray-300 hover:text-black">
//             Text
//           </Button>
//           <Button variant="contained">Contained</Button>
//           <Button variant="outlined">Outlined</Button>
//         </Stack>
//         <Image className=" rounded-xl" src={codeimg} width={550} height={350} alt="code img"></Image>
//       </main>
//     </>
//   );
// }
import Image from "next/image";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import  codeimg  from "../../public/codeimg.png";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-5 w-full h-[100vh] justify-center items-center"> 
      <h3 className="Text-3xl">Nextjs (Typescript) configuration with <b>Taiwind</b> and <b>MUI</b> Both </h3>
        <Stack spacing={2} direction="row">
          <Button className="p-2 bg-red-300 text-white hover:bg-gray-300 hover:text-black">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Image className=" rounded-xl" src={codeimg} width={550} height={350} alt="code img"></Image>
      </main>
    </>
  );
}
