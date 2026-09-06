<script setup lang="ts">
import { RouterLink } from 'vue-router'

import Background from '@/components/Background.vue'
import GoogleIcon from '@/components/GoogleIcon.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
</script>

<template>
  <Background>
    <section class="py-28 lg:pt-44 lg:pb-32">
      <div class="container">
        <div class="flex flex-col gap-4">
          <Card class="mx-auto w-full max-w-sm">
            <CardHeader class="flex flex-col items-center space-y-0">
              <img
                src="/logo.svg"
                alt="logo"
                width="94"
                height="18"
                class="mb-7 dark:invert"
              />
              <p class="mb-2 text-2xl font-bold">Start your free trial</p>
              <p class="text-muted-foreground">
                Sign up in less than 2 minutes.
              </p>
            </CardHeader>
            <CardContent>
              <form class="grid gap-4">
                <Input type="text" placeholder="Enter your name" required />
                <Input type="email" placeholder="Enter your email" required />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                  <p class="text-muted-foreground mt-1 text-sm">
                    Must be at least 8 characters.
                  </p>
                </div>
                <Button type="submit" class="mt-2 w-full">
                  Create an account
                </Button>
                <Button variant="outline" class="w-full" type="button">
                  <GoogleIcon class="mr-2 size-5" />
                  Sign up with Google
                </Button>
              </form>
              <div class="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                <p>Already have an account?</p>
                <RouterLink to="/login" class="text-primary font-medium">
                  Log in
                </RouterLink>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </Background>
</template>
