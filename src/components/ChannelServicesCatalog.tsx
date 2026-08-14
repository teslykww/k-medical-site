import { channelServiceDetails, channelServiceGroups } from "@/content/channel-services";
import { ProductDetailsTrigger } from "./ProductDetailsTrigger";
import { Reveal } from "./motion/Reveal";
import styles from "@/app/pages.module.css";

export function ChannelServicesCatalog() {
  return (
    <div className={styles.channelServicesCatalog}>
      <Reveal className={styles.channelServicesHeader}>
        <div>
          <h3>Можно подключить один конкретный канал</h3>
          <p>Настраиваем его с учётом услуг клиники, географии, врачей, аудитории, текущей базы пациентов и пути до записи.</p>
        </div>
        <aside>
          <strong>Канал должен работать внутри общей системы</strong>
          <p>Сначала определяем задачу и место канала в пути пациента. Затем настраиваем запуск, точку обращения и понятный контроль результата.</p>
          <span>Состав и стоимость определяем после короткого разговора.</span>
        </aside>
      </Reveal>

      <div className={styles.channelServiceMosaic}>
        {channelServiceGroups.map((group, groupIndex) => (
          <Reveal className={styles.channelServiceGroup} delay={groupIndex * 0.06} key={group.title}>
            <header>
              <h4>{group.title}</h4>
              <p>{group.description}</p>
            </header>
            <div className={styles.channelServiceList}>
              {group.items.map((item) => (
                <ProductDetailsTrigger
                  key={item.detailId}
                  detail={channelServiceDetails[item.detailId]}
                  label={item.name}
                  description={item.description}
                  variant="service"
                />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
