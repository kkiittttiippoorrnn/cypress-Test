describe('Login - Horganice', () => {
  const url = 'https://app.horganice.in.th/login';

  beforeEach(() => {
    cy.visit(url);
  });

  it('TC01 - เข้าสู่ระบบด้วยข้อมูลที่ถูกต้อง', () => {
    cy.get('input[type=username]').type('0812345678');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/dashboard');
  });

  it('TC02 - เข้าสู่ระบบ กรณี อีเมลที่ผิด', () => {
    cy.get('input[type=username]').type('086543210');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('button[type=submit]').click();

    cy.contains('ไม่พบผู้ใช้งาน');
  });

  it('TC03 - เข้าสู่ระบบ กรณี รหัสผ่านที่ผิด', () => {
    cy.get('input[type=username]').type('086543210');
    cy.get('input[name=password]').type('Test@4321');
    cy.get('button[type=submit]').click();

    cy.contains('ไม่พบผู้ใช้งาน');
  });

    it('TC04 - เข้าสู่ระบบ กรณี ไม่กรอกอีเมล', () => {
    cy.get('input[name=password]').type('Test@1234');
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกข้อมูล');
  });

    it('TC05 - เข้าสู่ระบบ กรณี ไม่กรอกรหัสผ่าน', () => {
    cy.get('input[type=username]').type('0812345678');
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกข้อมูล');
  });

   it('TC06 - เข้าสู่ระบบ กรณี ไม่กรอกอีเมลและรหัสผ่าน', () => {
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกข้อมูล');
  }); 
  
});
