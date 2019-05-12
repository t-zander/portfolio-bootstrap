export class Work {
  constructor(
    public description: string,
    public status: string,
    public title: string,
    public id?: string,
    public images?: string[],
    public technologies?: Technology[],
    public link_to_repo?: string
  ) {}
}

export class Technology {
  constructor(
    public technology_name: string
  ) {}
}
