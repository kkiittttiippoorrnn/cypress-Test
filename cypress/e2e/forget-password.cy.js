describe('Forgot Password - Horganice', () => {
  const url = 'https://app.horganice.in.th/login';

  beforeEach(() => {
    cy.visit(url);
    cy.contains('ลืมรหัสผ่าน?').click();
  });

  it('TC01 - แก้ไขรหัสผ่าน กรณี เบอร์โทรที่ได้ลงทะเบียนไว้', () => {
    cy.get('input[name=tel]').type('0812345678');
    cy.get('button[type=submit]').click();

    cy.contains('ส่งรหัส OTP สำเร็จ');
  });

  it('TC02 - แก้ไขรหัสผ่าน กรณี เบอร์โทรไม่ได้ลงทะเบียนไว้', () => {
    cy.get('input[name=tel]').type('0999999999');
    cy.get('button[type=submit]').click();

    cy.contains('ไม่พบเบอร์โทรนี้ในระบบ');
  });
});
