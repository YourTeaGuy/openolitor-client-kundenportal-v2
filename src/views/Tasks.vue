<template>
  <div>
    <h1 >Tasks</h1>
    <div  v-for="(task, index) in allTasks" :key="index">
      <Task :task="task" />
    </div>
  </div>
</template>


<script lang="ts">
import Task from "../components/Task.vue"
export default {
  data() {
    return {
      allTasks:
        [
          {
            title: "Kohlrabiernte",
            address: {
              street: "Schanzenstraße",
              streetNo: "22",
              postalCode: "50677",
              city: "cologne",
            },
            categories: ["Feldarbeit", "Ernte", "Logistik"],
            participants: [
              "Erika Elster",
              "Frieda Fruchtig",
              "Can Cantaloupe",
              "Lara Lustig",
              "Chayenne Pfeffer",
            ],
            requiredParticipants: 3,
            text: "Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe Sonne an der Oberfläche der undurchdringlichen Finsternis meines Waldes ruht, und nur einzelne Strahlen sich in das innere Heiligtum stehlen, ich dann im hohen Grase am fallenden Bache liege, und näher an der Erde tausend mannigfaltige Gräschen mir merkwürdig werden; wenn ich das Wimmeln der kleinen Welt zwischen Halmen, die unzähligen, unergründlichen Gestalten der Würmchen, der Mückchen näher an meinem Herzen fühle, und fühle die Gegenwart des Allmächtigen, der uns nach seinem Bilde schuf, das Wehen des Alliebenden, der uns in ewiger Wonne schwebend trägt und erhält; mein Freund! Wenn's dann um meine Augen dämmert, und die Welt um mich her und der Himmel ganz in meiner Seele ruhn wie die Gestalt einer ",
          },
          {
            title: "Große Ernterunde",
            address: {
              street: "Schanzenstraße",
              streetNo: "22",
              postalCode: "50677",
              city: "cologne",
            },
            categories: ["Feldarbeit", "Ernte", "Logistik", "Kistenpacken", "Kräuterbündeln"],
            participants: [
              "Ash Field",
              "Hans Schaufel",
              "Hanna Spaten",
              "Lerry Pipfer",
            ],
            requiredParticipants: 9,
            text: "Heute wird fast alles geerntet. Wir brauchen hilfe beim Ernten von Gemüse, Kräutern und Beeren. Die Ernte wird vorraussichtlich zwischen 8:00 und 12:00 stattfinden, wonnach wir gemeinsam zum Mittagessen anstoßen. Wer möchte kann gerne kleinigkeiten zum Teilen mitbringen; Brötchen und aufstriche, sowie Überschuss von der Ernte sind bereits gedeckt.",
          },
      ],
    };
  },
  components: { Task }
};
</script>