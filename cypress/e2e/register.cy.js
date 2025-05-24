describe('Register - Horganice', () => {
  const url = 'https://app.horganice.in.th/register';

  beforeEach(() => {
    cy.visit(url);
  });

  it('TC01 - สมัครสมาชิกโดยกรอกข้อมูลครบถ้วน', () => {
    cy.get('input[type=radio][value="staff"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/login');
  });

  it('TC02 - สมัครสมาชิกโดยไม่กรอกข้อมูลใดๆ', () => {
    cy.get('button[type=submit]').click();
    cy.contains('กรุณากรอกชื่อจริง');
    cy.contains('กรุณากรอกนามสกุล');
    cy.contains('กรุณากรอกวันเกิด');
    cy.contains('กรุณากรอกเบอร์โทร');
    cy.contains('กรุณากรอกอีเมล');
    cy.contains('กรุณากรอกรหัสผ่าน');
  });

  it('TC03 - สมัครสมาชิก กรณีเลือกตำแหน่งของท่านเป็น "พนักงาน" ' , () => {
    cy.get('input[type=radio][value="staff"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/login');
  });

    it('TC04 - สมัครสมาชิก กรณีเลือกตำแหน่งของท่านเป็น "ผู้เช่า" ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/login');
  });

      it('TC05 - สมัครสมาชิก สมัครสมาชิก กรณีไม่กรอกชื่อจริง ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกชื่อจริงของคุณ');
  });

    it('TC06 - สมัครสมาชิก กรณีไม่กรอกนามสกุล ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกนามสกุลของคุณ');
  });

      it('TC07 - สมัครสมาชิก กรณีไม่กรอกวัน/เดือน/ปีเกิด  ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกวัน/เดือน/ปีเกิดของคุณ');
  });

      it('TC08 - สมัครสมาชิก กรณีไม่กรอกเบอร์โทร ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกเบอร์โทรของคุณ');
  });

      it('TC09 - สมัครสมาชิก กรณีไม่กรอกอีเมล ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกอีเมลของคุณ');
  });

      it('TC10 - สมัครสมาชิก กรณีไม่กรอกรหัสผ่าน ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกรห้สผ่านของคุณ');
  });

    it('TC11 - สมัครสมาชิก กรณีไม่กรอกยืนยันรหัสผ่าน ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกยืนยันรห้สผ่านของคุณ');
  });

      it('TC12 - สมัครสมาชิก กรณีกรอกรหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@4321');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณากรอกรหัสผ่านกับยืนยันรห้สผ่านไม่ตรงกัน');
  });

      it('TC13 - สมัครสมาชิก กรณีไม่รหัสแนะนำ/รหัสโปรโมชั่น ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.url().should('include', '/login');
  });

      it('TC14 - สมัครสมาชิก กรณีไม่เลือกเพศ ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="checkbox"][ng-model="formData.isAcceptPolicy"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณาเลือกเพศของคุณ');
  });

      it('TC15 - สมัครสมาชิก กรณีไม่ ติ๊กเครื่องหมายถูกยินยอมตามเงื่อนไขการใช้บริการ ' , () => {
    cy.get('input[type=radio][value="renter"]').check();
    cy.get('input[name=firstname]').type('สมชาย');
    cy.get('input[name=lastname]').type('ใจดี');
    cy.get('input[name=birthday]').type('01');
    cy.get('input[name=birthMonth]').type('01');
    cy.get('input[name=birthYear]').type('1999');
    cy.get('input[name=tel]').type('0812345678');
    cy.get('input[name=email]').type('testuser@email.com');
    cy.get('input[name=password]').type('Test@1234');
    cy.get('input[name=passwordConfirm]').type('Test@1234');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('button[type=submit]').click();

    cy.contains('กรุณาติ๊กเครื่องหมายถูกยินยอมตามเงื่อนไขการใช้บริการ');
  });
});
