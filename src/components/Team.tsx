import { coreTeam, specialistRoles } from "@/content/site";
import styles from "./site.module.css";

export function Team() {
  return (
    <div className={styles.teamLayout}>
      <div className={styles.teamCore}>
        {coreTeam.map((member) => (
          <article key={member.name} className={styles.teamMember}>
            <div className={styles.initials} aria-hidden>
              {member.initials}
            </div>
            <div>
              <h3>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p>{member.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.specialists}>
        <h3>Под задачу подключаем профильных специалистов</h3>
        <div>
          {specialistRoles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
