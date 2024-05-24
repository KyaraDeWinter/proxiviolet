import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row p-20 gap-40 text-white bg-zinc-900">
        <div>
          <h1 className="font-mono text-xl">Creators</h1>
          <ul>
            <li>
              <p>LordOfTheLetter</p>
            </li>
            <li>
              <p>SeerkerOfUltimateFate</p>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-mono text-xl">Whisper to us</h1>
          <ul>
            <li>
              <p>Social Media Links</p>
            </li>
          </ul>
        </div>
        <h1 className="font-mono text-xl">ProxiViolet &copy; {new Date().getFullYear()}</h1>
        <div className="relative translate-x-60">
          <Image src="/infestation01.png" width={200} height={200} alt="Infestation Bug" />
        </div>
      </footer>
    </>
  );
}
