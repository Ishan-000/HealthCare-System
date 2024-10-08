import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center mb-12">
            <Image
              src="/assets/icons/logos.svg"
              height={1000}
              width={1000}
              alt="UltraCare logo"
              className="h-10 w-fit mr-3"
            />
            <h1 className="text-2xl font-bold text-green-500">UltraCare</h1>
          </div>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 UltraPlus
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/Onboarding1.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%] rounded-lg"
      />
    </div>
  );
};

export default Home;
