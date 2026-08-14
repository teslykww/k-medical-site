import styles from "./site.module.css";

type Props = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, description, align = "left" }: Props) {
  return (
    <div className={`${styles.sectionHeading} ${align === "center" ? styles.sectionHeadingCenter : ""}`}>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

