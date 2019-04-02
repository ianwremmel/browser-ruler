#!/usr/bin/env bash

set -euo pipefail

PUBLISH_FOR_REVIEW_MESSAGE='Your add-on has been submitted for review. It passed validation but could not be automatically signed because this is a listed add-on.'

set +e
web-ext sign \
  --source-dir dist \
  --channel listed \
  --api-key "$WEXT_SHIPIT_FIREFOX_JWT_ISSUER" \
  --api-secret "$WEXT_SHIPIT_FIREFOX_JWT_SECRET" \
  --id "$WEXT_SHIPIT_FIREFOX_ID" | tee firefox.out
EXIT_CODE=$?
set -e

if [ "$EXIT_CODE" != "0" ]; then
  if grep -qc "$PUBLISH_FOR_REVIEW_MESSAGE" firefox.out; then
    echo 'Found message indicating a review by the Firefox folks has been scheduled'
  else
    exit $EXIT_CODE
  fi
fi
