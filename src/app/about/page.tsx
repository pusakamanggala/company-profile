import Team from "@/components/Team";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="pt-10 bg-gray">
      <div className="container space-y-10 md:space-y-12 lg:max-w-[1000px]">
        <hgroup className="page-title">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, dolore. Magni nemo harum error numquam tempora minus
          </p>
        </hgroup>
        <div className="space-y-5">
          <div className="relative h-96 w-full mx-auto overflow-hidden">
            <Image
              src="/images/about/about-1.jpg"
              alt="author"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            voluptatum velit! Provident obcaecati vel, quos eius repudiandae
            ipsa sint dolorum libero, consequatur repellat in sed! Nulla
            consequuntur, id aperiam ab rem esse nihil reiciendis! Deleniti,
            sequi quasi! Nostrum repellendus illum nesciunt deleniti excepturi?
            Numquam labore veritatis earum dolor, facilis recusandae voluptate
            autem ad? Impedit, ullam. Qui incidunt esse omnis ut, libero
            molestiae molestias sit neque fuga eum, odit aliquam dignissimos
            veniam voluptatibus vitae voluptatem. Distinctio harum, ducimus,
            repellendus aut labore facere numquam possimus quaerat dolorum
            placeat iure veritatis voluptatem natus? Similique, voluptatum animi
            repellendus dicta totam tempore optio quas dolores hic minus magni
            debitis nemo sequi nisi amet, dolore sapiente ab unde voluptatem
            necessitatibus. Perspiciatis maiores eius eum non beatae tenetur
            placeat earum deleniti exercitationem facilis rem iste, dolor
            doloremque? Repudiandae doloribus enim fuga? Non molestias quo
            corporis cum possimus ducimus earum autem minus, ex suscipit
            quisquam, atque, nemo eum? Debitis, aut sapiente. Consequuntur ipsam
            animi laudantium voluptatem, aut libero nemo obcaecati ab quidem
            provident non sit reprehenderit nobis est doloremque cum ut quia
            quibusdam, magnam fuga. Quibusdam dolore, blanditiis voluptatum
            nihil accusamus nesciunt suscipit qui possimus fugiat, reiciendis
            cumque natus ad repellendus laudantium cum ipsam? Ex in pariatur
            quo.
          </p>
        </div>
        <div className="space-y-5">
          <div className="relative h-96 w-full mx-auto overflow-hidden">
            <Image
              src="/images/about/about-2.jpg"
              alt="author"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            voluptatum velit! Provident obcaecati vel, quos eius repudiandae
            ipsa sint dolorum libero, consequatur repellat in sed! Nulla
            consequuntur, id aperiam ab rem esse nihil reiciendis! Deleniti,
            sequi quasi! Nostrum repellendus illum nesciunt deleniti excepturi?
            Numquam labore veritatis earum dolor, facilis recusandae voluptate
            autem ad? Impedit, ullam. Qui incidunt esse omnis ut, libero
            molestiae molestias sit neque fuga eum, odit aliquam dignissimos
            veniam voluptatibus vitae voluptatem. Distinctio harum, ducimus,
            repellendus aut labore facere numquam possimus quaerat dolorum
            placeat iure veritatis voluptatem natus? Similique, voluptatum animi
            repellendus dicta totam tempore optio quas dolores hic minus magni
            debitis nemo sequi nisi amet, dolore sapiente ab unde voluptatem
            necessitatibus. Perspiciatis maiores eius eum non beatae tenetur
            placeat earum deleniti exercitationem facilis rem iste, dolor
            doloremque? Repudiandae doloribus enim fuga? Non molestias quo
            corporis cum possimus ducimus earum autem minus, ex suscipit
            quisquam, atque, nemo eum? Debitis, aut sapiente. Consequuntur ipsam
            animi laudantium voluptatem, aut libero nemo obcaecati ab quidem
            provident non sit reprehenderit nobis est doloremque cum ut quia
            quibusdam, magnam fuga. Quibusdam dolore, blanditiis voluptatum
            nihil accusamus nesciunt suscipit qui possimus fugiat, reiciendis
            cumque natus ad repellendus laudantium cum ipsam? Ex in pariatur
            quo.
          </p>
        </div>
        <div className="space-y-9">
          <h2 className="text-center">Our Team</h2>
          <Team />
        </div>
      </div>
    </main>
  );
};

export default About;
