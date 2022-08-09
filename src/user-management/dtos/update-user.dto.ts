import { USER_ROLE } from '../user-management.model';

export class UpdateUserDto {
  public name: string;
  public age: number;
  public role: USER_ROLE;
  public active: boolean;
}