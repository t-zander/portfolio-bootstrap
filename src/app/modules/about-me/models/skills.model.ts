export class Skill {
  constructor(
    public field: string,
    public technologies: Technologies
  ) {}
}

export class Technologies {
  constructor(
    public name: string,
    public progress: number
  ) {}
}
