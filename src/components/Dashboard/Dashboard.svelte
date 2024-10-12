<script>
    import Note from "./Note.svelte";
    const notes = [
        { title: "Prueba", description: "Una descripcion de prueba" },
        { title: "Prueba", description: "Una descripcion de prueba" },
        { title: "Prueba", description: "Una descripcion de prueba" },
        { title: "Prueba", description: "Una descripcion de prueba" },
    ];
</script>

<main class="flex justify-center mt-24 flex-col items-center">
    <h1 class="">Tus notas:</h1>
    {#each notes as note}
        <Note title={note.title} description={note.description} />
    {/each}
</main>
