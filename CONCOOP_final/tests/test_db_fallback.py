import os
import tempfile
import unittest
from unittest.mock import patch

import app as app_module


class DatabaseFallbackTests(unittest.TestCase):
    def test_connect_db_falls_back_to_sqlite_when_postgres_is_unavailable(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            db_path = os.path.join(tmpdir, "agrolink.sqlite3")
            with patch.object(app_module, "DEFAULT_DATABASE_URL", "postgresql://invalid:invalid@127.0.0.1:5432/agrolink"), patch.object(
                app_module.psycopg2,
                "connect",
                side_effect=app_module.OperationalError("db unavailable"),
            ), patch.object(app_module, "BASE_DIR", tmpdir):
                conn = app_module.connect_db()
                self.assertIsNotNone(conn)
                self.assertEqual(conn.db_type, "sqlite")
                self.assertTrue(os.path.exists(db_path))
                conn.close()


if __name__ == "__main__":
    unittest.main()
