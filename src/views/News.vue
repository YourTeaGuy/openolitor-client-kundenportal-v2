<template>
  <div class="flex h-auto justify-center py-4">
    <div class="rounded-xl border-4 border-solid border-blue-500 px-6 pb-8 text-black text-opacity-80 hover:bg-blue-100">
      <div class="mx-auto max-w-4xl">
        <!-- Titel -->
        <div class="mt-8 text-3xl leading-normal">
          <p class="hover:underline">Wir haben mehr als 100 Mitglieder!</p>
        </div>
        <!-- Bild -->
        <div class="mt-8">
          <img class="max-h-80 w-full rounded-xl object-cover" src="https://www.wwf.de/fileadmin/_processed_/d/1/csm_agrar-landwirtschaft-bluehstreifen-politik-IMGL9732-c-sonja-ritter-wwf_2870cbdcc3.jpg" alt="Author icon" />
        </div>
        <!-- Autor:in mit Datum und Icon -->
        <div class="mt-8 flex flex-row">
          <div class="w-6">
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Author icon" />
          </div>
          <div class="ml-4 text-2xl leading-none">
            <span>Petra Müller,</span>
            <span class="text-black text-opacity-50">27.11.2022</span>
          </div>
        </div>
        <!-- Beitragstext -->
        <div class="line-clamp-6 mt-8 text-xl leading-relaxed text-black text-opacity-80">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <!-- Button "zum gesamten Beitrag" -->
        <div class="flex items-center justify-center">
          <div class="mt-8 flex max-w-fit rounded-full border-solid border-blue-700 bg-blue-500 p-3 hover:border-4 hover:p-2">
            <span class="mx-3 border-solid border-black text-xl leading-none text-white">zum gesamten Beitrag ➜</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style lang="css" scoped>
.btn {
}
</style>