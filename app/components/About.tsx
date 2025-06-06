// components/About.tsx
"use client";
import * as motion from "motion/react-client";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[980px] py-8 md:py-12 scroll-mt-16"
    >
      <div className="flex flex-col gap-4">
        <motion.h2
          className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground">
                I'm a Computer Science Major at the University of Toronto with
                minors in Mathematics and Statistics. I have a strong foundation
                in programming principles and a passion for building efficient,
                user-friendly applications.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-muted-foreground">
                My academic journey combines mathematical rigor with practical
                software development skills. I'm particularly interested in data
                science, web development, and creating innovative solutions that
                solve real-world problems.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground">
                Outside of academics, I'm actively involved in the Computer
                Science Student Union as Vice President of External Relations,
                where I secure sponsorships and organize events to enhance
                professional development opportunities for students.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-muted-foreground">
                I'm currently seeking internship opportunities where I can apply
                my skills in software development, data analysis, and project
                management to contribute to meaningful projects.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
