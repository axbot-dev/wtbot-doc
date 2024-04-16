import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<"svg">>;
  imageSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "详尽的游戏数据",
    imageSrc: require("@site/static/img/index1.webp").default,
    description: (
      <>
        掌握核心技术，从《战争雷霆》中获取玩家的公开数据。包括游戏生涯，载具数据等
      </>
    ),
  },
  {
    title: "快捷的使用方式",
    imageSrc: require("@site/static/img/index2.webp").default,
    description: (
      <>
        和KOOK平台深度集成，以KOOK聊天机器人的方式提供服务，仅需简单的步骤就能使用
      </>
    ),
  },
  {
    title: "完整的文档支持",
    imageSrc: require("@site/static/img/index3.webp").default,
    description: (
      <>
        我们提供完整的文档支持，不仅包括了机器人的使用方法，还包括了我们获取数据的介绍和解释
      </>
    ),
  },
];

function Feature({ title, imageSrc, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imageSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
