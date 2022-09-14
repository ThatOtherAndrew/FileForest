from pathlib import Path

from fastapi import APIRouter, Response


router = APIRouter(prefix='/branch')


@router.post('/new', status_code=201)
async def create_branch(response: Response, name: str):
    branch = Path('files') / name
    if branch.is_dir():
        response.status_code = 409
        return {'success': False}

    branch.mkdir()
    return {'success': True}
