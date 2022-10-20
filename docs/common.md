- We need to Avoid Using Hard Coded String on Pages , need to use translation function

-- How to use ?
Hook : const { t } = useTranslation(); // Need to import
Add Key / Value in : en.ts file
In Component : {t('<KEY_NAME>')}

For EX :

``
=== en.ts ===
"SIGN_IN":"Sign in"

=== in component ===
{t('SIGN_IN')}

``
