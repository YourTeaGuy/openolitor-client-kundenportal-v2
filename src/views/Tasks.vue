<template>
  <div>
    <!--     <ViewHeadline text="Alle Aufgaben" />
 -->
    <h1 class="txt-headline-big">Alle Aufgaben:</h1>
    <div v-for="(task, index) in allTasks" :key="index">
      <Task
        @click="toggleTask(index)"
        :task="task"
        :isActive="checkIndex(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ViewHeadline from "../components/composables/ViewHeadline.vue";
import Task from "../components/Task.vue";

export default {
  components: { ViewHeadline, Task },
  data() {
    return {
      activeItem: 0 as number | null,

      allTasks: [
        {
          title: "Kohlrabiernte",
          startDate: new Date(2023, 7, 1, 9, 10),
          endDate: new Date(2023, 7, 1, 16, 20),
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
          requiredParticipants: 2,
          text: "Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe Sonne an der Oberfläche der undurchdringlichen Finsternis meines Waldes ruht, und nur einzelne Strahlen sich in das innere Heiligtum stehlen, ich dann im hohen Grase am fallenden Bache liege, und näher an der Erde tausend mannigfaltige Gräschen mir merkwürdig werden; wenn ich das Wimmeln der kleinen Welt zwischen Halmen, die unzähligen, unergründlichen Gestalten der Würmchen, der Mückchen näher an meinem Herzen fühle, und fühle die Gegenwart des Allmächtigen, der uns nach seinem Bilde schuf, das Wehen des Alliebenden, der uns in ewiger Wonne schwebend trägt und erhält; mein Freund! Wenn's dann um meine Augen dämmert, und die Welt um mich her und der Himmel ganz in meiner Seele ruhn wie die Gestalt einer ",
        },
        {
          title: "Jungpflanzenanzucht und Schafe schälen",
          startDate: new Date(2023, 7, 1, 9, 10),
          endDate: new Date(2023, 8, 1, 16, 20),
          address: {
            street: "Waschstraße",
            streetNo: "153a",
            postalCode: "940123",
            city: "Köln",
          },
          categories: ["Anzucht", "Arbeit mit Tieren", "buddeln"],
          participants: ["Erika Elster", "Frieda Fruchtig"],
          requiredParticipants: 7,
          text: "Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin allein und freue mich meines Lebens in dieser Gegend, die für solche Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen Strich, und bin nie ein größerer Maler gewesen als in diesen Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe Sonne an der Oberfläche der undurchdringlichen Finsternis meines Waldes ruht, und nur einzelne Strahlen sich in das innere Heiligtum stehlen, ich dann im hohen Grase am fallenden Bache liege, und näher an der Erde tausend mannigfaltige Gräschen mir merkwürdig werden; wenn ich das Wimmeln der kleinen Welt zwischen Halmen, die unzähligen, unergründlichen Gestalten der Würmchen, der Mückchen näher an meinem Herzen fühle, und fühle die Gegenwart des Allmächtigen, der uns nach seinem Bilde schuf, das Wehen des Alliebenden, der uns in ewiger Wonne schwebend trägt und erhält; mein Freund! Wenn's dann um meine Augen dämmert, und die Welt um mich her und der Himmel ganz in meiner Seele ruhn wie die Gestalt einer ",
        },
        {
          title: "Hügelbeet anlegen",
          startDate: new Date(2023, 7, 1, 9, 10),
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
      ],
    };
  },
  methods: {
    toggleTask(index: number) {
      console.log("toggling");
      if (index == this.activeItem) {
        this.activeItem = null;
      } else {
        this.activeItem = index;
      }
    },
    checkIndex(index: number): boolean {
      if (index == this.activeItem) {
        console.log(index, "is true");
        return true;
      } else {
        console.log(index, "is false");
        return false;
      }
    },
  },
};
</script>