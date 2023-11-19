<script lang="ts">
    type Breadcrumb = {
        label: string
        href: string
    }
    const breadcrumbs: Breadcrumb[] = []
</script>

<ol class="breadcrumb">
    {#each breadcrumbs as crumb, i}
        {#if i < breadcrumbs.length - 1}
            <!-- Each crumb has link and a separator follows -->
            <li class="crumb"><a class="anchor" href="{crumb.href}">{crumb.label}</a></li>
            <li class="crumb-separator"></li>
        {:else}
            <!-- Last crumb, does not have a link -->
            <li class="crumb">{crumb.label}</li>
        {/if}
        
    {/each}
</ol>
