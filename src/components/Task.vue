<template>
<div class="border-solid border-gray-400 rounded-md bg-white my-3">
    <div class="px-5 pt-3 rounded-md">
        <div class="grid grid-flow-row mb-1 ">
        <div class="grid grid-flow-col mb-2 text-lg justify-between">
            <h2>
                {{title}}
            </h2>
            <div>
            <span>Status: </span>
            <!-- ToDo: eigene teilnahme einfügen -->
            <span class="bg-red-400 rounded-2xl px-2" v-if="targetParticipantsMet == true">TeilnehmerInnen gesucht!</span>
            <span class="bg-yellow-300 rounded-2xl px-2" v-else="targetParticipantsMet == false">ausreichend TeilnehmerInnen</span>
            </div>
        </div>
        </div>
        <div class="grid grid-flow-row mb-2 text-sm">
        <div>
            <!-- NEEDS GRID LAYOUT!!! -->
            <img src="" /> 
            <span>27.11.22 von 12:00 bis 17:00</span>
        </div>
        <div>
            <img src="" />
            <span>Einsatzort: {{fullAddress}}</span>
        </div>
        <div class="grid grid-flow-col justify-start">
            <span class="col-span-1">Kategorien:</span>
            <div class="col-span-10 grid grid-flow-col" v-for="(category, categoryIndex) in categories" :key="categoryIndex">
                <span class="px-2">{{category}}</span>
            </div>
        </div>
        <div class="grid grid-flow-col justify-start">
            <span> {{participants.length}} von {{requiredParticipants}} erforderlichen TeilnehmerInnen: </span>
            <div v-for="(participant, pIndex) in participants" :key="pIndex">
                <span class="px-2" v-if="pIndex < 3">{{participant}}</span>
                <span v-if="pIndex === 4">+ {{participants.length - 3}} weitere</span>
            </div>
        </div>
        </div>
    </div>

    <!-- Description -->
    <div class="px-5">
        <p>
            {{text}}
        </p>
    </div>

    <!-- options -->
    <div class=" grid grid-flow-col justify-between pb-3 pt-5 px-5">
        <button class="bg-emerald-500 border-solid border-emerald-700 text-gray-50 rounded-2xl px-2 pb-1 shadow-md shadow-emerald-200 hover:shadow-lg hover:shadow-emerald-500">Verbindlich eintragen</button>
        <div class="">
        <span class="align-center">Mitfahrgelegenheit </span>
        <button class="bg-slate-400 rounded-2xl px-2 pb-1 mx-2">suchen</button>
        <button class="bg-slate-400 rounded-2xl px-2 pb-1 mx-2">anbieten</button>
        </div>
    </div>
</div>

</template>

<script lang="ts">
import { PropType } from 'vue';
    
type Task = {
    title: string,
    address: Address,
    categories: string[],
    participants: string[],
    requiredParticipants: number,
    text: string
};
type Address = {
    street: string,
    streetNo: string,
    postalCode: number,
    city: string
};

export default {
    data() {
        return {
            title: this.task!.title,
            address: this.task!.address,
            categories: this.task!.categories,
            participants: this.task!.participants,
            requiredParticipants: this.task!.requiredParticipants,
            text: this.task!.text
        }
    },
    computed: {
        targetParticipantsMet() { return this.task!.participants.length > this.task!.requiredParticipants },
        neededAdditionalParticipants() { return this.task!.requiredParticipants - this.task!.participants.length > this.task!.requiredParticipants },
        fullAddress() { return `${this.address.street} ${this.address.streetNo}, ${this.address.postalCode} ${this.address.city}` },
    },
    props: {
        task: {
            type: Object as PropType<Task>,
            requried: true
        }
    }
}

</script>