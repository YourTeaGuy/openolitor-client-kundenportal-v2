<template>
  <div class="flex h-auto justify-center py-4">
    <div
      class="rounded-xl border-4 border-solid border-slate-200 bg-slate-100 px-3 pb-5 text-black text-opacity-80 hover:bg-white">
      <div class="mx-auto">
        <!-- Titel -->
        <div class="mt-3 text-xl leading-normal">
          <p class="hover:underline">Wir haben mehr als 100 Mitglieder!</p>
        </div>
        <!-- Autor:in mit Datum und Icon -->
        <div class="mt-3 flex flex-row align-middle">
          <div class="w-5">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Author icon" />
          </div>
          <div class="ml-2 text-lg leading-none">
            <span>Petra Müller,</span>
            <span class="text-black text-opacity-50"> 27.11.2022</span>
          </div>
        </div>
        <!-- Bild -->
        <div class="mt-4">
          <img class="max-h-80 w-full rounded-xl object-cover"
            src="https://www.wwf.de/fileadmin/_processed_/d/1/csm_agrar-landwirtschaft-bluehstreifen-politik-IMGL9732-c-sonja-ritter-wwf_2870cbdcc3.jpg"
            alt="Author icon" />
        </div>
        <!-- Beitragstext -->
        <div class="line-clamp-4 mt-2 text-lg leading-relaxed text-black text-opacity-80">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <!-- Button "zum gesamten Beitrag" -->
        <div class="flex items-center justify-center">
          <Btn class="btn-enabled color-default">Zum Beitrag</Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {
  }
}
</script>