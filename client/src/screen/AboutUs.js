import {
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
export default function AboutUs() {
  let data = [
    "Exercices de relaxation : Ipsy Press propose une bibliothèque d'exercices de relaxation conçus pour vous aider à vous détendre et à réduire le stress accumulé pendant les heures de travail. Des techniques de respiration profonde, des séances de méditation guidées et des exercices de gestion du stress vous permettront de trouver un moment de calme et de tranquillité, même au milieu de l'agitation professionnelle.",
    "Conseils pratiques : Notre application regorge de conseils pratiques pour vous aider à gérer le stress et les tensions psychologiques. Nous partageons des stratégies éprouvées pour la gestion du temps, la résolution de problèmes et l'établissement de limites saines. Grâce à ces conseils, vous pourrez améliorer votre bien-être au travail et trouver un équilibre entre vos responsabilités professionnelles et votre santé mentale.",
    "Suivi de progression : Ipsy Press vous permet de suivre votre progression dans votre parcours vers une meilleure gestion du stress. Vous pourrez enregistrer vos séances de relaxation, suivre vos habitudes de bien-être et visualiser vos réalisations. Ce suivi vous aidera à prendre conscience de vos progrès et à vous motiver dans votre démarche de bien-être mental.",
    "Ressources complémentaires : Ipsy Press propose également une sélection de ressources complémentaires telles que des articles, des podcasts et des vidéos pour approfondir votre compréhension du stress, de la gestion émotionnelle et du bien-être au travail. Ces ressources supplémentaires vous permettront d'explorer davantage de sujets liés à votre bien-être mental. ",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>À propos d'Ipsy Press</Text>
      <Text style={styles.paragraph}>
        Bienvenue sur la page "À propos" de l'application Ipsy Press ! Nous
        sommes ravis de vous présenter notre application innovante conçue
        spécialement pour aider les travailleurs à soulager le stress et les
        tensions psychologiques pendant les heures de travail et bien plus
        encore. Chez Ipsy Press, notre mission est de fournir un soutien
        pratique et efficace pour favoriser le bien-être mental et émotionnel
        des employés.
      </Text>
      <Text style={styles.paragraph}>
        Nous comprenons les défis auxquels les travailleurs sont confrontés dans
        leur quotidien professionnel. Le rythme effréné, les exigences élevées
        et les pressions constantes peuvent générer du stress et avoir un impact
        négatif sur notre bien-être mental. C'est pourquoi nous avons créé Ipsy
        Press, une application puissante qui offre des outils essentiels pour
        vous aider à retrouver votre équilibre et à gérer votre stress
        efficacement.
      </Text>
      <Text style={styles.paragraph}>
        Ce qui rend Ipsy Press unique, c'est notre approche holistique pour
        promouvoir le bien-être mental et émotionnel. Notre application propose
        une variété d'exercices, de conseils et de techniques éprouvés qui
        peuvent être facilement intégrés dans votre routine quotidienne. Que
        vous ayez besoin de moments de détente pendant une pause, d'exercices de
        respiration pour vous recentrer ou de conseils pour gérer les situations
        stressantes, Ipsy Press est là pour vous soutenir à chaque étape.
      </Text>
      <Text style={styles.highlight}>
        Voici quelques fonctionnalités clés de notre application :
      </Text>
      {data.map((item) => {
        return <Text key={item.slice(0,5)} style={styles.paragraph}>{"\u2022 " + item}</Text>;
      })}
      <Text style={styles.paragraph}>
        Chez Ipsy Press, nous croyons que chaque individu mérite de se sentir
        bien et épanoui au travail. Notre application est conçue pour vous
        accompagner dans votre parcours vers une meilleure santé mentale, en
        vous fournissant les outils nécessaires pour gérer
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    textAlign: "justify",
  },
  highlight: {
    fontWeight: "700",
  },
});
