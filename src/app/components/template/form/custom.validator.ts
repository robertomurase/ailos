import {
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
  FormControl,
} from '@angular/forms';

export class CustomValidator {
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      // if control is empty return no error
      if (!control.value) return {};

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? {} : error;
    };
  }

  static CPF(control: FormControl) {
    let numeros, digitos, soma, i, resultado, digitos_iguais;
    let cpf = '' + control.value;
    cpf = cpf.toString().replace('.', '').replace('.', '').replace('-', '');
    digitos_iguais = 1;

    if (cpf == null || cpf == undefined) return { cpf: true };

    if (cpf.length < 11) return { cpf: true };

    for (i = 0; i < cpf.length - 1; i++) {
      if (cpf.charAt(i) != cpf.charAt(i + 1)) {
        digitos_iguais = 0;
        break;
      }
    }

    if (!digitos_iguais) {
      numeros = cpf.substring(0, 9);
      digitos = cpf.substring(9);
      soma = 0;
      for (i = 10; i > 1; i--) {
        soma += +numeros.charAt(10 - i) * i;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      if (resultado != parseInt(digitos.charAt(0))) {
        return { cpf: true };
      }
      numeros = cpf.substring(0, 10);
      soma = 0;
      for (i = 11; i > 1; i--) {
        soma += +numeros.charAt(11 - i) * i;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      if (resultado != parseInt(digitos.charAt(1))) {
        return { cpf: true };
      }

      return null;
    } else return { cpf: true };
  }
}
