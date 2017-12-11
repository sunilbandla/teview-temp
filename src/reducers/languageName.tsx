import { LanguageAction } from '../actions/enthusiasmLevel';
import { initialState } from '../common/store';

export function languageNameReducer(
  state: string = initialState.languageName,
  action: LanguageAction
): string {
  switch (action.type) {
    case 'ChangeName':
      return 'changed ' + Date.now();
    default:
      return state;
  }
}
