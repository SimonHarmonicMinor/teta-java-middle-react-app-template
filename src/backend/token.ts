export default class TokenStorage {
  private static tokenKey: string = 'token';

  public static setToken(token: string): void {
    localStorage.setItem(token, token);
  }

  public static getToken(): string {
    return localStorage.getItem(TokenStorage.tokenKey) ?? '';
  }

  public static clearToken(): void {
    localStorage.removeItem(TokenStorage.tokenKey);
  }
}
