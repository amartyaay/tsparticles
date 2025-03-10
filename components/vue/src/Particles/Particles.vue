<template>
  <div :id="id"></div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { tsParticles } from "tsparticles";
import type { Container, ISourceOptions, Main } from "tsparticles";
import Vue from "vue";

export type IParticlesProps = ISourceOptions;
export type IParticlesParams = IParticlesProps;

@Component
export default class Particles extends Vue {
  @Prop({ required: true }) private id!: string;
  @Prop() private options?: IParticlesProps;
  @Prop() private url?: string;
  @Prop() private particlesLoaded?: (container: Container) => void;
  @Prop() private particlesInit?: (tsParticles: Main) => void;
  private container?: Container;

  private mounted(): void {
    this.$nextTick(() => {
      if (!this.id) {
        throw new Error("Prop 'id' is required!")
      }

      if (this.particlesInit) {
        this.particlesInit(tsParticles);
      }

      const cb = (container?: Container) => {
        this.container = container;

        if (this.container && this.particlesLoaded) {
          this.particlesLoaded(this.container);
        }
      };

      if (this.url) {
        tsParticles.loadJSON(this.id, this.url).then(cb);
      } else {
        tsParticles.load(this.id, this.options ?? {}).then(cb);
      }
    });
  }

  private beforeDestroy(): void {
    this.container?.destroy();
  }
}
</script>
